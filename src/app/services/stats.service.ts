import { Injectable } from '@angular/core';

export interface Stats {
  ancienTestament: {
    point?: number;
  };
  nouveauTestament: {
    point?: number;
  };
  messe: {
    point?: number;
  };
  organisation: {
    point?: number;
  };
  communaute: {
    point?: number;
  };
  histoire: {
    point?: number;
  };
  saints: {
    point?: number;
  };
  autresReligions: {
    point?: number;
  };
}

@Injectable({
  providedIn: 'root',
})
export class StatsService {
  currentStats: Stats = {
    ancienTestament: {
      point: undefined,
    },
    nouveauTestament: {
      point: undefined,
    },
    messe: {
      point: undefined,
    },
    organisation: {
      point: undefined,
    },
    communaute: {
      point: undefined,
    },
    histoire: {
      point: undefined,
    },
    saints: {
      point: undefined,
    },
    autresReligions: {
      point: undefined,
    },
  };

  get stats() {
    return this.currentStats;
  }
  set ancienTestament(val: number) {
    this.currentStats.ancienTestament.point = val;
    this.save();
  }
  set nouveauTestament(val: number) {
    this.currentStats.nouveauTestament.point = val;
    this.save();
  }
  set messe(val: number) {
    this.currentStats.messe.point = val;
    this.save();
  }
  set organisation(val: number) {
    this.currentStats.organisation.point = val;
    this.save();
  }
  set communaute(val: number) {
    this.currentStats.communaute.point = val;
    this.save();
  }
  set histoire(val: number) {
    this.currentStats.histoire.point = val;
    this.save();
  }
  set saints(val: number) {
    this.currentStats.saints.point = val;
    this.save();
  }
  set autresReligions(val: number) {
    this.currentStats.autresReligions.point = val;
    this.save();
  }

  constructor() {
    let stats = localStorage.getItem('stats');
    if (stats) {
      this.currentStats = JSON.parse(stats);
    }
  }

  save(): void {
    localStorage.setItem('stats', JSON.stringify(this.currentStats));
  }
}
