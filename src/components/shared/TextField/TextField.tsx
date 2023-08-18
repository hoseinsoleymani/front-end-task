import { Slot } from "@radix-ui/react-slot";
import { type InputHTMLAttributes, type Ref } from "react";
import React, { isValidElement, useId } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  asChild?: boolean;
  invalid?: boolean;
  errorId: string;
  hasStartIcon?: boolean;
  hasEndIcon?: boolean;
  ref: Ref<any>;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      asChild,
      invalid,
      "aria-describedby": ariaDescribedby,
      "aria-errormessage": areaErrorMessage,
      id,
      value,
      errorId,
      disabled,
      hasStartIcon,
      hasEndIcon,
      ...props
    },
    ref
  ) => {
    const Element = asChild ? Slot : "input";
    return (
      <Element
        {...props}
        ref={ref}
        disabled={disabled}
        className={`py-3.5 outline-none block w-full border-0 p-0 text-gray-900 placeholder-gray-300 height-full focus:ring-0 sm:text-sm bg-transparent ${hasStartIcon ? "pl-9" : "pl-4"
          }
       ${hasEndIcon ? "pr-9" : "pr-4"}
      `}
        aria-describedby={ariaDescribedby}
        aria-invalid={invalid}
        id={id}
        value={value}
        aria-errormessage={areaErrorMessage}
      />
    );
  }
);

interface TextFieldDescriptionProps {
  description?: string;
  id: string;
  visuallyShow: boolean | undefined;
}

const TextFieldDescription = ({
  description,
  id,
  visuallyShow,
}: TextFieldDescriptionProps) => {
  return description ? (
    <p
      id={id}
      className={visuallyShow ? "sr-only" : "text-body-caption text-light"}
    >
      {description}
    </p>
  ) : null;
};

interface TextFieldLabelProps {
  label?: string;
  textFieldId: string;
}

const TextFieldLabel = ({ label, textFieldId }: TextFieldLabelProps) => {
  return label ? (
    <label
      htmlFor={textFieldId}
      className="absolute -top-2 left-2 -mt-px inline-block bg-white px-1 text-xs font-medium text-gray-900"
    >
      {label}
    </label>
  ) : null;
};

interface TextFieldErrorMessageProps {
  id: string;
  message?: string;
}

const TextFieldErrorMessage = ({ id, message }: TextFieldErrorMessageProps) => {
  return (
    <span id={id} className="text-body-caption text-red-600 ml-3">
      {message}
    </span>
  );
};

interface TextAreaProps
  extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "id"> { }

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(({ ...props }, ref) => {

  return <textarea ref={ref} className="relative rounded-lg border border-gray-100 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600 w-full py-3.5 pl-4 h-28 outline-none mt-6"  {...props} />;
});

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  description?: string;
  invalid?: boolean;
  errorMessage?: string;
  maxLength?: number;
  label?: string;
  StartIcon?: any;
  EndIcon?: any;
  asChild?: boolean;
}

export const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      description,
      invalid,
      errorMessage,
      asChild,
      label,
      value,
      StartIcon,
      EndIcon,
      className,
      ...props
    },
    ref
  ) => {
    const id = useId();
    const descriptionId = `textField-description-${id}`;
    const errorId = `textField-error-${id}`;
    const textFieldId = `textField-${id}`;

    return (
      <>
        <div
          className={`relative rounded-lg border border-gray-100 h-[3.5rem] shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600 ${invalid
            ? "border-red-600 border bg-red-700 bg-opacity-5 hover:bg-error"
            : "border-gray-100 border background-light"
            } ${className}`}
        >
          <TextFieldLabel label={label} textFieldId={textFieldId} />

          <div className="relative w-full h-full">
            {StartIcon ? (
              <StartIcon
                className="w-5 absolute text-gray-300 left-[10px] top-1/2 -translate-y-1/2"
                aria-label="start icon"
              />
            ) : null}

            <Input
              {...props}
              ref={ref}
              asChild={asChild}
              invalid={invalid}
              aria-describedby={`${descriptionId}`}
              aria-errormessage={invalid ? errorId : undefined}
              id={textFieldId}
              errorId={errorId}
              hasStartIcon={Boolean(StartIcon)}
              hasEndIcon={Boolean(EndIcon)}
            />

            {EndIcon && !isValidElement(EndIcon) ? (
              <EndIcon
                aria-label="end icon"
                className="icon-md absolute right-[18px] top-1/2 -translate-y-1/2"
              />
            ) : null}

            {EndIcon && isValidElement(EndIcon) ? (
              <span className="absolute right-[18px] top-1/2 -translate-y-1/2">
                {EndIcon}
              </span>
            ) : null}
          </div>

          <div className="mt-2 flex justify-between h-[10px]">
            {invalid && errorMessage ? (
              <TextFieldErrorMessage message={errorMessage} id={errorId} />
            ) : null}

            <TextFieldDescription
              id={descriptionId}
              description={description}
              visuallyShow={errorMessage ? invalid : undefined}
            />
          </div>
        </div>

      </>
    );
  }
);
