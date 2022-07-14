import { TestBed } from '@angular/core/testing';

import { SeasonFoodServiceService } from './season-food-service.service';

describe('SeasonFoodServiceService', () => {
  let service: SeasonFoodServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeasonFoodServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
