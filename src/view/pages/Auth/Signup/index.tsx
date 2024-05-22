import { Controller } from "react-hook-form";
// Components
import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";
import { InputMask } from "../../../components/Input/types/Mask";
// Controller
import { useSignupController } from "./useSignupController";

export function SignupPage() {
  const { control, errors, handleGoToSignin, handleSubmit, register } =
    useSignupController();

  return (
    <>
      <h2 className="text-sm">Sign up a new account</h2>

      <form
        className="mt-4 flex flex-col gap-4 text-right"
        onSubmit={handleSubmit}
      >
        <Input
          maxLength={50}
          placeholder="Full name"
          error={errors.name?.message}
          {...register("name")}
        />

        <Input
          type="email"
          maxLength={70}
          placeholder="Email"
          autoComplete="email"
          error={errors.email?.message}
          {...register("email")}
        />

        <Controller
          name="phone"
          control={control}
          render={({ field: { onChange, value } }) => (
            <InputMask
              value={value}
              onChange={onChange}
              placeholder="Phone"
              mask={"(00) 00000-00000"}
              error={errors.phone?.message}
            />
          )}
        />

        <Controller
          name="cpf"
          control={control}
          render={({ field: { onChange, value } }) => (
            <InputMask
              value={value}
              placeholder="CPF"
              mask="000.000.000-00"
              onChange={onChange}
              error={errors.cpf?.message}
            />
          )}
        />

        <Input
          maxLength={30}
          type="password"
          placeholder="Password"
          autoComplete="current-password"
          error={errors.password?.message}
          {...register("password")}
        />

        <Input
          maxLength={30}
          type="password"
          placeholder="Confirm password"
          autoComplete="confirm-password"
          error={errors.confirmPassword?.message}
          {...register("confirmPassword")}
        />

        <Button type="submit" className="mt-6 w-full">
          Sign up
        </Button>
      </form>

      <p className="text-sm text-center mt-3">
        Already have account?
        <span
          role="button"
          className="text-primary-500 font-bold px-1 py-3"
          onClick={handleGoToSignin}
        >
          Sign in
        </span>
      </p>
    </>
  );
}
