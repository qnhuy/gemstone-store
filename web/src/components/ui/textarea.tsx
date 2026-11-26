'use client'

import * as React from 'react'
import { cn } from 'cn'
import { Control, Controller, FieldValues, Path } from 'react-hook-form'
import { Field, FieldError, FieldLabel } from './field'

function Textarea({ className, ...props }: React.ComponentProps<'textarea'>) {
	return (
		<textarea
			data-slot='textarea'
			className={cn(
				'flex field-sizing-content min-h-16 w-full rounded-lg border border-input bg-transparent px-2.5 py-2 text-base transition-colors outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40',
				className,
			)}
			{...props}
		/>
	)
}

type ControlledTextareProps<T extends FieldValues> = {
	control: Control<T>
	name: Path<T>
	id?: string
	label?: string
	placeholder?: string
	required?: boolean
}

function ControlledTextarea<T extends FieldValues>({
	control,
	name,
	id,
	label,
	placeholder,
	required = false,
}: ControlledTextareProps<T>) {
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
					<Textarea
						{...field}
						id={id}
						placeholder={placeholder}
						aria-invalid={fieldState.invalid}
					/>
					{fieldState.error && <FieldError errors={[fieldState.error]} />}
				</Field>
			)}
		/>
	)
}

export { Textarea, ControlledTextarea }
