import axios from 'axios';

export default class QuestionService {
  static async getAllQuestions(
    page = 1,
    title,
    specializationId,
    skills,
    complexity = [],
    rate = [],
  ) {
    let baseParams = {
      page,
      title,
      specializationId,
      skills,
      rate,
    };

    if (complexity.length) {
      baseParams = { ...baseParams, complexity: complexity.join(',') };
    }

    if (rate.length) {
      baseParams = { ...baseParams, rate: rate.join(',') };
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
