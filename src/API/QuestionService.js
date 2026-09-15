import axios from 'axios';

const QUESTIONS_URL = import.meta.env.VITE_QUESTIONS_API_URL;
const SPECIALIZATIONS_URL = import.meta.env.VITE_SPECIALIZATIONS_API_URL;
const SKILLS_URL = import.meta.env.VITE_SKILLS_API_URL;

export default class QuestionService {
  static async getAllQuestions(
    page = 1,
    title,
    specializationId,
    skills = [],
    complexities = [],
    rates = [],
  ) {
    let baseParams = {
      page,
      title,
      specializationId,
      skills,
      rates,
    };

    if (complexities.length) {
      baseParams = { ...baseParams, complexity: complexities.join(',') };
    }

    if (rates.length) {
      baseParams = { ...baseParams, rate: rates.join(',') };
    }

    if (skills.length) {
      baseParams = { ...baseParams, skills: skills.join(',') };
    }

    const response = await axios.get(QUESTIONS_URL, {
      params: {
        ...baseParams,
      },
    });

    return response;
  }

  static async getAllSpecializations(limit = 10) {
    const response = await axios.get(SPECIALIZATIONS_URL, {
      params: {
        limit,
      },
    });

    return response;
  }

  static async getAllSkills(limit = 10) {
    const response = await axios.get(SKILLS_URL, {
      params: {
        limit,
      },
    });

    return response;
  }
}
