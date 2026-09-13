import axios from 'axios';

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

    const response = await axios.get('https://api.yeatwork.ru/questions/public-questions', {
      params: {
        ...baseParams,
      },
    });

    return response;
  }

  static async getAllSpecializations(limit = 10) {
    const response = await axios.get('https://api.yeatwork.ru/specializations', {
      params: {
        limit: limit,
      },
    });

    return response;
  }

  static async getAllSkills(limit = 10) {
    const response = await axios.get('https://api.yeatwork.ru/skills', {
      params: {
        limit: limit,
      },
    });

    return response;
  }
}
