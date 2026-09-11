import axios from 'axios';

export default class QuestionService {
  static async getAllQuestions(page = 1, title, specializationIds = []) {
    const baseParams = { page: page, title: title };

    if (!specializationIds.length) {
      const response = await axios.get('https://api.yeatwork.ru/questions/public-questions', {
        params: baseParams,
      });

      return response;
    }

    const responses = await Promise.all(
      specializationIds.map((id) => {
        return axios.get('https://api.yeatwork.ru/questions/public-questions', {
          params: { ...baseParams, specializationId: id },
        });
      }),
    );

    const merged = responses.flatMap((r) => r.data.data);
    const unique = Array.from(new Map(merged.map((q) => [q.id, q])).values());

    return {
      ...responses[0],
      data: {
        data: unique,
        total: unique.length,
      },
    };
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
