import { useMutation } from '@tanstack/react-query';
import client from '../client';

const url = '/api/statements';

interface IStatementData {
  title?: string;
  classHours?: string;
  duration?: string;
  location?: string;
  phone?: string;
  program?: string;
  startDate?: string;
  applicationDeadline?: string;
  description?: string;
  registrationLink?: string;
  filedStudyId?: string;
  formatId?: string;
  languageId?: string;
  levelId?: string;
  regionId?: string;
  teacherIds?: string[];
  topics?: string[];
  whatWeOffer?: string;
  salary?: number;
  additionalNotes?: string;
  responsibilities?: string;
  skills?: string;
  employmentId?: string[];
  filedWorkId?: string[];
}

interface IParams {
  id: string;
  statementData: IStatementData;
}

const useUpdateSinglePost = (options = {}) =>
  useMutation(async (params: IParams) => {
    await client.put(`${url}/${params.id}`, params.statementData);
  }, options);
export default useUpdateSinglePost;
