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
    complexity = [],
    rate = [],
  ) {
    const params = {
      page,
      title,
      specializationId,
    };

    if (complexity.length) {
      params.complexity = complexity.join(',');
    }

    if (rate.length) {
      params.rate = rate.join(',');
    }

    if (skills.length) {
      params.skills = skills.join(',');
    }

    const response = await axios.get(QUESTIONS_URL, {
      params,
    });

    return response;
  }

  static async getAllSpecializations(limit = 5) {
    const response = await axios.get(SPECIALIZATIONS_URL, {
      params: {
        limit,
      },
    });

    return response;
  }

  static async getAllSkills(limit = 8) {
    const response = await axios.get(SKILLS_URL, {
      params: {
        limit,
      },
    });

    return response;
  }
}
