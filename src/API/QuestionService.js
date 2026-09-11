import axios from 'axios';

export default class QuestionService {
  static async getAllQuestions(page = 1, limit = 10) {
    const response = await axios.get('https://api.yeatwork.ru/questions/public-questions', {
      params: {
        limit: limit,
        page: page,
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
