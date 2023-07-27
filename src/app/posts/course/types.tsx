import { IOptions } from "@/types/global"

interface IDynamicForm {
    name: string
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
export interface IAboutCourse{
    options: IOptions[]
}
export interface IContactsSelectData{
    courseFormat: IOptions[]
    courseLanguage: IOptions[]
    courseLevel: IOptions[]
    regions: IOptions[]
    teachers: IOptions[]
}
export interface IContacts{
    options: IContactsSelectData
}
export interface ITeacher{
    options: IOptions[]
}

export type OpenModalType = (data: IFormData) => void
