interface IDynamicForm {
    name: string
}
interface IOptions {
    value: string
    label: string
}

export interface IFormData {
    classHours?: string
    courseDuration?: string
    description?: string
    filedStudyId?: IOptions
    formatId?: IOptions
    languageId?: IOptions
    levelId?: IOptions
    location?: string
    phone?: string
    program?: string | undefined
    regionId?: IOptions
    registrationLink?: string
    startDate?: string
    title?: string
    teacherId?:IOptions[]
    topics?: IDynamicForm[]
}

export interface ICourseDetails{
    formData: IFormData
}
export interface ISkills{
    formData: IFormData
}
export interface IProgram{
    formData: IFormData
}
export interface IDetails{
    formData: IFormData
}

export type OpenModalType = (data: IFormData) => void