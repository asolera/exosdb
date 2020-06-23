import Papa from 'papaparse';

class Database {
  constructor() {
    
  }

  async getData() {
    const req = await fetch('databases/heroes.csv');
    const csv = await req.text();
    const options = {
      delimiter: ';',
      header: true,
      skipEmptyLines: true
    };
    let res = Papa.parse(csv, options);
    const { data, errors } = res;
    this.data = data;
    return { data, errors };
  }

  getAllStatsMinMax() {
    const allStatsMinMax = {};
    const statsReference = ['age', 'power', 'hp', 'attack', 'minAttack', 'maxAttack', 'defense', 'hit', 'dodge', 'criticalHit', 'blockRate', 'speed', 'maxDamageMultiplier'];
    statsReference.forEach(stat => allStatsMinMax[stat] = this._getStatReference(stat));
    return allStatsMinMax;
  }

  _getStatReference = (fieldName) => {
    const min = Math.min.apply(Math, this.data.map(hero => {
      if (hero[fieldName] != '-') return parseFloat(hero[fieldName]);
      return false;
    }));
    const max = Math.max.apply(Math, this.data.map(hero => {
      if (hero[fieldName] != '-') return parseFloat(hero[fieldName]);
      return false;
    }));
    return { min, max };
  }
}

export default Database;