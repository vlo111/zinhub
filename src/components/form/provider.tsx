import { ReactNode } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

export default ({ children }: { children: ReactNode }) => <FormProvider {...useForm()}>{children}</FormProvider>;
