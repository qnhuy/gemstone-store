'use client'

import * as React from 'react'
import { Input as InputPrimitive } from '@base-ui/react/input'
import { cn } from 'cn'
import { Control, Controller, FieldValues, Path } from 'react-hook-form'
import { Field, FieldError, FieldLabel } from './field'

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
	return (
		<InputPrimitive
			type={type}
			data-slot='input'
			className={cn(
				'h-8 w-full min-w-0 rounded-lg border border-input bg-transparent px-2.5 py-1 text-base transition-colors outline-none file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40',
				className,
			)}
			{...props}
		/>
	)
}

type ControlledInputProps<T extends FieldValues> = {
	control: Control<T>
	name: Path<T>
	id?: string
	label?: string
	placeholder?: string
	required?: boolean
}

function ControlledInput<T extends FieldValues>({
	control,
	name,
	id,
	label,
	placeholder,
	required = false,
}: ControlledInputProps<T>) {
	return (
		<Controller
			control={control}
			name={name}
			render={({ field, fieldState }) => (
				<Field>
					{label && id && (
						<FieldLabel htmlFor={id}>
							{label}
							{required && <span className='text-destructive'>*</span>}
						</FieldLabel>
					)}
					<Input {...field} id={id} placeholder={placeholder} aria-invalid={fieldState.invalid} />
					{fieldState.error && <FieldError errors={[fieldState.error]} />}
				</Field>
			)}
		/>
	)
}

export { Input, ControlledInput }
