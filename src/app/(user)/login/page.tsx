'use client'

/* eslint-disable react/jsx-props-no-spreading */

import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import Input from '@/components/input'
import ErrorMessage from '@/components/errorMessage'

export interface LoginForm {
  email: string
  password: string
}

export default function Login() {
  const router = useRouter()

  const {
    register,
    formState: { errors },
  } = useForm<LoginForm>({ mode: 'onBlur' })

  return (
    <div className="flex flex-col gap-8 justify-center items-center w-full h-full">
      <div>
        <p className="text-3xl font-bold">똑똑한 청년.</p>
        <p className="text-l font-semibold">
          자격증 시험과 기업 면접을 이젠 스마트하게!
        </p>
      </div>

      <form className="flex flex-col gap-1 w-1/2">
        <Input
          label="이메일을 입력하세요"
          name="email"
          kind="login"
          type="text"
          register={register('email', {
            required: '필수 입력 칸입니다',
            pattern: {
              value: /^\S+@\S+$/i,
              message: '이메일의 형식에 맞게 입력해 주세요',
            },
          })}
          required
        />
        {errors.email && <ErrorMessage message={errors.email.message!} />}
        <Input
          label="비밀번호를 입력하세요"
          name="password"
          kind="login"
          type="password"
          register={register('password')}
          required
        />
        <div className="flex justify-between">
          <label htmlFor="myCheckbox" className="flex items-center gap-2">
            <input type="checkbox" id="myCheckbox" name="myCheckbox" />
            로그인유지
          </label>
          <button type="button">비밀번호 찾기</button>
        </div>
      </form>
      <div className="flex flex-col justify-center gap-2 w-1/2 ">
        <button
          type="submit"
          className="p-3 border-2 w-full rounded-3xl text-white bg-gray-900 hover:bg-gray-600 text-l font-semibold"
        >
          로그인
        </button>
        <div className="flex gap-2 justify-center">
          <button
            type="button"
            className=""
            onClick={() => router.push('/signup')}
          >
            회원가입
          </button>
          |
          <button type="button" className="">
            아이디 찾기
          </button>
        </div>
      </div>
    </div>
  )
}
