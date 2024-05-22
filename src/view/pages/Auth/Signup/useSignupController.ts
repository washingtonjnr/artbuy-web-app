import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
// Components
import toast from "react-hot-toast";
// Hooks
import { useAuth } from "../../../../app/hooks/useAuth";
// Services
import { authService } from "../../../../app/services/auth/@index";
import { SignupParams } from "../../../../app/services/auth/signup";
// Utils
import { LABEL_ERRORS } from "../../../../app/utils/labelErrors";
import { validateCPF, validateFullName, validatePassword } from "../../../../app/utils/validations";
// Validations
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const password = z.string({ required_error: LABEL_ERRORS.EMPTY }).min(8, LABEL_ERRORS.INVALID_PASSWORD).refine((password) => validatePassword(password), { message: LABEL_ERRORS.PASSWORD_NOT_REQUIREMENTS });

const schema = z.object({
  cpf: z.string({ required_error: LABEL_ERRORS.EMPTY }).refine((cpf) => validateCPF(cpf), { message: LABEL_ERRORS.INVALID_CPF }),
  name: z.string({ required_error: LABEL_ERRORS.EMPTY }).refine((name) => validateFullName(name), { message: LABEL_ERRORS.INVALID_NAME }),
  email: z.string({ required_error: LABEL_ERRORS.EMPTY }).email(LABEL_ERRORS.INVALID_EMAIL),
  phone: z.string({ required_error: LABEL_ERRORS.EMPTY }).regex(/^\(\d{2}\) \d{4,5}-\d{4}$/, { message: LABEL_ERRORS.INVALID_NUMBER }),
  password: password,
  confirmPassword: password,
}).refine(data => data.password === data.confirmPassword, {
  message: LABEL_ERRORS.PASSWORD_NOT_MATCH,
  path: ["confirmPassword"]
});

type SignupFormData = z.infer<typeof schema>;

export function useSignupController() {
  const navigate = useNavigate();
  // Hook
  const { onSignin } = useAuth();
  // 
  const { 
    register,
    control,
    handleSubmit: hookFormHandleSubmit,
    formState: { errors }
  } = useForm<SignupFormData>({
    // Validation is done in zodResolver
    resolver: zodResolver(schema),
    defaultValues: {
      // name: "Junior Araujo",
      // email: "junior+1@araujo.com",
      // cpf: "498.908.728.38",
      // phone: "(11) 98972-6012",
      // password: "Teste@123",
      // confirmPassword: "Teste@123",
    }
  });

  const { 
    mutateAsync,
    isPending: isLoading, 
  } = useMutation({
    mutationKey: ["POST", "signup"],
    mutationFn: async (data: SignupParams) => await authService.signup(data),
  });

  const handleSubmit = hookFormHandleSubmit(async (data) => {
    try {
      const buildData = {
        ...data,
        "phone": `+55 ${data.phone}`,
        "confirmPassword": undefined,
      }

      const { accessToken, refreshToken } = await mutateAsync(buildData);

      if (accessToken && refreshToken) {
        onSignin(accessToken, refreshToken);

        toast.error("Account created successfully!")
      }
    } catch (error) {
      toast.error("Err when create account!")
    }
  });

  function handleGoToSignin() {
    navigate("/signin");
  }

  return {
    isLoading,
    errors,
    control,
    // 
    register,
    handleSubmit,
    handleGoToSignin,
  };
}
