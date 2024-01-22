"use client"
import { DashboardIcon, GitHubLogoIcon } from '@radix-ui/react-icons';
import { signIn } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react'
import { AiFillGithub, AiFillGoogleCircle, AiFillGoogleSquare, AiOutlineGithub, AiOutlineGoogle } from 'react-icons/ai';

export const SigninForm = () => {

  const router = useRouter()

  const signinGoogle = () => {
    signIn("google", {
      callbackUrl: "/"
    })

  }
  const signinGithub = () => {
    signIn("github", {
      callbackUrl: "/"
    })
  }

  return (
    <div className="h-screen w-screen bg-background">
      <div
        className="fixed grid place-items-center backdrop-blur-sm top-0 right-0 left-0 z-50 w-full inset-0 h-modal h-full justify-center items-center">
        <div className="relative container m-auto px-6">
          <div className="m-auto md:w-7/12">
            <div className="rounded-xl">
              <div className="p-8">
                <div className="space-y-4">
                  <DashboardIcon />
                  <h2 className="mb-8 text-2xl font-bold">Signin to Youly
                  </h2>
                </div>
                <div className="mt-10 grid space-y-4">
                  <button
                    onClick={() => signinGoogle()}
                    className="group h-12 px-6 border-2 border-primary  rounded-full transition duration-100 hover:bg-primary text-muted-foreground hover:text-muted  active:bg-primary-foreground">
                    <div className="relative flex items-center space-x-4 justify-center">
                      <AiFillGoogleCircle
                        className="absolute left-0 w-5 h-10" alt="google logo" />
                      <span
                        className="block w-max font-semibold tracking-wide  text-sm transition duration-300  sm:text-base">Continue
                        with Google
                      </span>
                    </div>
                  </button>
                  <button
                    onClick={() => signinGithub()}
                    className="group h-12 px-6 border-2 border-primary  rounded-full transition duration-100 hover:bg-primary text-muted-foreground hover:text-muted  active:bg-primary-foreground">
                    <div className="relative flex items-center space-x-4 justify-center">
                      <AiFillGithub className='absolute left-0 w-5 h-10' />
                      <span
                        className="block w-max font-semibold tracking-wide text-sm transition  sm:text-base">Continue
                        with Github
                      </span>
                    </div>
                  </button>
                </div>
                <div className="mt-14 space-y-4 p y-3 text-center">
                  <p className="text-xs">By proceeding, you agree to our
                    <a href="#" className="underline">Terms of Use</a>
                    and confirm you have read our
                    <a href="#" className="underline">Privacy and Cookie Statement</a>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default SigninForm

