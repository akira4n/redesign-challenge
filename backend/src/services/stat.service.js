const statRepository = require('../repositories/stat.repository');

class StatService {
  async getStats() {
    const totalGames = await statRepository.getGameCount();
    const totalPublishers = await statRepository.getPublisherCount();
    const ratingsGrouped = await statRepository.getRatingsGrouped();

    // Map database ageRating values ("3", "7", etc.) to display format ("3+", "7+", etc.)
    const ratings = {
      '3+': 0,
      '7+': 0,
      '13+': 0,
      '15+': 0,
      '18+': 0
    };

    ratingsGrouped.forEach(group => {
      const key = `${group.ageRating}+`;
      if (ratings[key] !== undefined) {
        ratings[key] = group._count.id;
      }
    });

    return {
      ratings,
      totalGames,
      totalPublishers
    };
  }
}

module.exports = new StatService();
