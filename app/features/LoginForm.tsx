"use client";

import { useTranslations } from 'next-intl';
import { useRouter } from '@/i18n/navigation';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import { signIn } from 'next-auth/react';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

const LoginForm: React.FC = () => {
    const t = useTranslations('login');
    const router = useRouter();

    const schema = yup.object({
        email: yup.string().email(t('emailError')).required(t('emailError')),
        password: yup.string().min(6, t('passwordError')).required(t('passwordError')),
        remember: yup.boolean(),
    }).required();

    const {
        register,
        setError,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = handleSubmit(async (data) => {
        console.log(data);
        const res = await signIn("credentials", {
            redirect: false,
            ...data,
        });

        if (res?.error) {
            setError("root", { type: "manual", message: t('invalidCredentials') });
        } else {
            router.push(`/dashboard`);
        }
    });

    return (
        <form className="flex flex-grow max-w-md flex-col gap-4" onSubmit={onSubmit}>
            <h1 className="text-center text-gray-800 text-2xl font-regular dark:text-white">
                {t('title')}
            </h1>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="email">{t('email')}</Label>
                </div>
                <TextInput
                    id="email"
                    type="email"
                    placeholder={t('emailPlaceholder')}
                    required
                    {...register("email")}
                    className={`${errors.email ? 'border-red-500 ring-red-500' : ''}`}
                    color={errors.email ? 'failure' : undefined}
                />
                {errors.email && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-500">
                        {errors.email.message as string}
                    </p>
                )}
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="password">{t('password')}</Label>
                </div>
                <TextInput
                    id="password"
                    type="password"
                    required
                    placeholder={t('passwordPlaceholder')}
                    {...register("password")}
                    className={`${errors.password ? 'border-red-500 ring-red-500' : ''}`}
                    color={errors.password ? 'failure' : undefined}
                />
                {errors.password && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-500">
                        {errors.password.message as string}
                    </p>
                )}
            </div>
            <div className="flex items-center gap-2">
                <Checkbox id="remember" {...register("remember")} />
                <Label htmlFor="remember">
                    {t('rememberMe')}
                </Label>
            </div>
            <Button type="submit">{t('submit')}</Button>
        </form>
    );
};

export default LoginForm;