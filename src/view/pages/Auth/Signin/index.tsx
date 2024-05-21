// Components
import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";
// Controller
import { useSigninController } from "./useSigninController";

export function SigninPage() {
  const { isLoading, errors, handleSubmit, register, handleGoToSignup } =
    useSigninController();

  return (
    <section>
      <h2 className="text-gray-700 text-sm">Sign in your account</h2>

      <form
        onSubmit={handleSubmit}
        className="mt-4 flex flex-col gap-4 text-right"
      >
        <Input
          type="email"
          placeholder="Email"
          error={errors.email?.message}
          {...register("email")}
        />

        <div className="relative">
          <Input
            type="password"
            placeholder="Password"
            error={errors.password?.message}
            {...register("password")}
          />

          <small
            role="button"
            className="absolute bottom-1 translate-y-6 right-0 text-xs text-gray-700"
          >
            Forgot yout password?
          </small>
        </div>

        <Button type="submit" className="mt-6" isLoading={isLoading}>
          Log in
        </Button>
      </form>

      <p className="text-sm text-center mt-3">
        Don't have account?
        <span
          role="button"
          className="text-primary-500 font-bold px-1 py-3"
          onClick={handleGoToSignup}
        >
          Create now
        </span>
      </p>
    </section>
  );
}
