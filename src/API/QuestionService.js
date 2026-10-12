import axios from 'axios';
import { CONFIG } from '../config/env';

const QUESTIONS_URL = CONFIG.VITE_QUESTIONS_API_URL;
const SPECIALIZATIONS_URL = CONFIG.VITE_SPECIALIZATIONS_API_URL;
const SKILLS_URL = CONFIG.VITE_SKILLS_API_URL;
const QUESTION_BY_ID_URL = CONFIG.VITE_QUESTION_BY_ID_API_URL;

export default class QuestionService {
  static async getAllQuestions(
    page = 1,
    title,
    specializationId,
    skills,
    complexity,
    rate,
    signal,
  ) {
    if (!QUESTIONS_URL) {
      throw new Error('VITE_QUESTIONS_API_URL не задан. Проверьте .env (см. .env.example).');
    }
    const params = {
      page,
      title,
      specializationId,
    };

    if (complexity.length) {
      params.complexity = complexity;
    }

    if (rate.length) {
      params.rate = rate;
    }

    if (skills.length) {
      params.skills = skills;
    }

    const response = await axios.get(QUESTIONS_URL, {
      params,
      signal,
    });

    return response;
  }

  static async getAllSpecializations(limit = 5) {
    if (!SPECIALIZATIONS_URL) {
      throw new Error('VITE_SPECIALIZATIONS_API_URL не задан. Проверьте .env (см. .env.example).');
    }
    const response = await axios.get(SPECIALIZATIONS_URL, {
      params: {
        limit,
      },
    });

    return response;
  }

  static async getAllSkills(limit = 8) {
    if (!SKILLS_URL) {
      throw new Error('VITE_SKILLS_API_URL не задан. Проверьте .env (см. .env.example).');
    }
    const response = await axios.get(SKILLS_URL, {
      params: {
        limit,
      },
    });

    return response;
  }

  static async getQuestionById(id) {
    if (!QUESTION_BY_ID_URL) {
      throw new Error('VITE_QUESTION_BY_ID_API_URL не задан. Проверьте .env (см. .env.example).');
    }
    const response = await axios.get(`${QUESTION_BY_ID_URL}${id}`);

    return response;
  }
}
