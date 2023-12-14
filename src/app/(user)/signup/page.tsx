'use client'

import { useRef } from 'react'
import { FieldErrors, useForm } from 'react-hook-form'
import Input from '@/app/components/input'
import ErrorMessage from '@/app/components/errorMessage'
import useSWR from 'swr'
// import checkExists from '@/app/api/(user)/exists'

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
    setError,
    formState: { errors },
  } = useForm<SignUpForm>({ mode: 'onBlur' })

  const passwordRef = useRef<string | null>(null)
  passwordRef.current = watch('password')

  const checkExists = async (value: string, type: string) => {
    const response = await fetch(`/api/exists?${type}=` + value)
    const {
      data: { exists },
    } = await response.json()

    return !exists
  }

  const onValid = async (formData: SignUpForm) => {
    const response = await fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })

    const {
      success,
      message,
      error: { code },
    } = await response.json()

    if (!success) setError(code, { message })
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
        onSubmit={handleSubmit(onValid)}
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
            validate: async (value) => {
              return (
                (await checkExists(value, 'email')) ||
                '이미 존재하는 이메일입니다'
              )
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
            validate: (passwordCheck) =>
              passwordCheck === passwordRef.current ||
              '비밀번호가 일치하지 않습니다',
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
            validate: async (value) => {
              return (
                (await checkExists(value, 'nickname')) ||
                '이미 존재하는 닉네임입니다'
              )
            },
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
