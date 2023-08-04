'use client';
import { useMutation } from '@tanstack/react-query';
import client from '../client';

export const url = 'api/statements';

interface IParams {
  type: string;
  statementData: {
    title?: string;
    description?: string;
    program?: string;
    phone?: string;
    location?: string;
    duration?: string;
    startDate?: string;
    classHours?: string;
    courseDuration?: string;
    registrationLink?: string;
    responsibilities?: { description: string };
    additionalNotes?: string;
    salary?: string;
    applicationDeadline?: string;
    whatWeOffer?: string;
    skills?: { description: string };
    topics?: string[];
    regionId?: string;
    teacherIds?: string[];
    filedStudyId?: string;
    levelId?: string;
    languageId?: string;
    formatId?: string;
    filedWorkId?: string;
    employmentId?: string;
  };
}

const CreatePosts = (options = {}) =>
  useMutation(async (params: IParams) => {
    if (params.type !== undefined) {
      return await client.post(`${url}`, params);
    }
  }, options);
export default CreatePosts;
