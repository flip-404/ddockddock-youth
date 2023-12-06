'use client'

import { useRef } from 'react'
import { FieldErrors, useForm } from 'react-hook-form'
import Input from '@/components/input'
import ErrorMessage from '@/components/errorMessage'

export interface SignUpForm {
  email: string
  password: string
  passwordCheck: string
  nickname: string
  description?: string
}

export default function SignUp() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignUpForm>({ mode: 'onBlur' })

  // console.log(watch())
  const passwordRef = useRef<string | null>(null)
  passwordRef.current = watch('password')

  const onValid = (data: SignUpForm) => {
    console.log('onValid', data)
  }

  const onInValid = (InValidError: FieldErrors) => {
    console.log('onInValid', InValidError)
  }

  return (
    <div className="flex flex-col gap-8 justify-center items-center w-full h-full">
      <div>
        <p className="text-3xl font-bold">회원가입</p>
        <p className="text-l font-semibold">
          회원가입을 통해 다양한 기능을 사용해보세요!
        </p>
      </div>

      <form
        className="flex flex-col gap-1 w-1/2"
        onSubmit={handleSubmit(onValid, onInValid)}
      >
        <Input
          label="이메일 (아이디)"
          name="email"
          kind="signup"
          type="text"
          register={register('email', {
            required: '이메일을 입력해 주세요',
            pattern: {
              value: /^\S+@\S+$/i,
              message: '이메일의 형식에 맞게 입력해 주세요',
            },
          })}
          required
        />
        {errors.email && <ErrorMessage message={errors.email.message!} />}
        <Input
          label="비밀번호"
          name="password"
          kind="signup"
          type="password"
          register={register('password', {
            required: '비밀번호를 입력해 주세요',
            minLength: {
              value: 8,
              message: '최소 8자 이상 입력해 주세요',
            },
            maxLength: {
              value: 16,
              message: '최대 16자 이상 입력해 주세요',
            },
            pattern: {
              value:
                /^(?!((?:[A-Za-z]+)|(?:[~!@#$%^&*()_+=]+)|(?:[0-9]+))$)[A-Za-z\d~!@#$%^&*()_+=]{8,16}$/,
              message:
                '영문자, 숫자, 특수문자 중 2가지 이상 조합으로 작성해 주세요',
            },
          })}
          required
        />
        {errors.password && <ErrorMessage message={errors.password.message!} />}
        <Input
          label="비밀번호 (확인)"
          name="passwordCheck"
          kind="signup"
          type="password"
          register={register('passwordCheck', {
            required: '비밀번호를 한번 더 입력해 주세요',
          })}
          required
        />
        {errors.passwordCheck && (
          <ErrorMessage message={errors.passwordCheck.message!} />
        )}
        <Input
          label="닉네임"
          name="nickname"
          kind="signup"
          type="text"
          register={register('nickname', {
            required: '닉네임을 입력해 주세요',
            maxLength: { value: 10, message: '10자 이하로 입력해 주세요' },
          })}
          required
        />
        {errors.nickname && <ErrorMessage message={errors.nickname.message!} />}
        <Input
          label="상태 메시지 (다른 사람에게 보이고 싶은 한마디)"
          name="description"
          kind="signup"
          type="text"
          register={register('description')}
        />
        <div className="flex flex-col justify-center gap-2 w-full mt-2">
          <button
            type="submit"
            className="p-3 border-2 w-full rounded-3xl text-white bg-indigo-900 hover:bg-indigo-600 text-l font-semibold"
          >
            회원가입
          </button>
        </div>
      </form>
    </div>
  )
}