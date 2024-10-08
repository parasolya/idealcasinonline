"use client";

import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { formData } from "@/data";

import { useState } from "react";
import { useForm } from "react-hook-form";
import SuccessMessageModal from "@/components/common/SuccessMessageModal";

const ContactsForm = () => {
  const {
    register,
    trigger,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm();

  const {
    namedField: { name, email },
    buttonText,
  } = formData;

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const onSubmit = async (data) => {
    const formData = { ...data };
    localStorage.setItem("formData", JSON.stringify(formData));
    const isValid = await trigger();
    if (isValid) {
      setShowSuccessMessage(true);
      reset();
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 2000);
    }
  };

  return (
    <div className="w-full md:w-1/2">
      {showSuccessMessage && <SuccessMessageModal />}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full flex flex-col justify-between gap-6 md:gap-4 lg:gap-6">
          <div className="w-full md:h-50 mb-4 md:mb-0 flex flex-col gap-4">
            <Input
              id="name"
              label={name.label}
              type="text"
              placeholder={name.placeholder}
              errorMessage={errors.name?.message}
              {...register("name", {
                required: name.errorMessage || true,
                pattern: {
                  value:
                    /^(?!.*\s{2})[А-Яа-яЄєІіЇїҐґʼA-Za-z'-]+(\s[А-Яа-яЄєІіЇїҐґʼA-Za-z'-]+)*$/,
                  message: name.rules,
                },
                minLength: {
                  value: 2,
                  message: name.minLength,
                },
                maxLength: {
                  value: 30,
                  message: name.maxLength,
                },
              })}
            />

            <Input
              id="email"
              label="E-mail"
              type="text"
              placeholder="johnsmith@email.com"
              errorMessage={errors.email?.message}
              {...register("email", {
                required: email.errorMessage || true,
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: email.rules,
                },
              })}
            />
          </div>

          <div className="ml-auto mr-0">
            <Button variant="text" type="submit">
              {buttonText}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactsForm;
