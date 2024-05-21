import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
// Components
import toast from "react-hot-toast";
// Hooks
import { useAuth } from "../../../../app/hooks/useAuth";
// Services
import { authService } from "../../../../app/services/auth/@index";
import { SigninParams } from "../../../../app/services/auth/signin";
// Utils
import { LABEL_ERRORS } from "../../../../app/utils/labelErrors";
// Validations
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  email: z
    .string()
    .nonempty(LABEL_ERRORS.EMPTY)
    .email(LABEL_ERRORS.INVALID_EMAIL),
  password: z
    .string()
    .nonempty(LABEL_ERRORS.EMPTY)
    .min(8, LABEL_ERRORS.INVALID_PASSWORD),
});

type FormData = z.infer<typeof schema>;

export function useSigninController() {
  const navigate = useNavigate();
  //
  const {
    formState: { errors },
    register,
    handleSubmit: hookFormHandleSubmit,
  } = useForm<FormData>({
    // Validation is done in zodResolver
    resolver: zodResolver(schema),
    defaultValues: {
      email: "junior@araujo.com",
      password: "Teste123",
    },
  });

  const { mutateAsync, isPending } = useMutation({
    mutationKey: ["POST", "signin"],
    mutationFn: async (data: SigninParams) => {
      return authService.signin(data);
    },
  });

  const { onSignin } = useAuth();

  const handleSubmit = hookFormHandleSubmit(async (data) => {
    try {
      const { payload } = await mutateAsync(data);
      
      if ("accessToken" in payload && "refreshToken" in payload) {
        onSignin("accessToken", "refresh_token");
      }
    } catch (error) {
      toast.error("Invalid credentials");
    }
  });

  function handleGoToSignup() {
    navigate("/signin");
  }

  return {
    isLoading: isPending,
    errors: errors,
    register: register,
    handleSubmit: handleSubmit,
    handleGoToSignup: handleGoToSignup,
  };
}
