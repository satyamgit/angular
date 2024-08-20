import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { SearchFormComponent } from './search-form.component';
import { ApiService } from '../services/api.service';
import { of } from 'rxjs';

describe('SearchFormComponent', () => {
  let component: SearchFormComponent;
  let fixture: ComponentFixture<SearchFormComponent>;
  let apiService: ApiService;

  beforeEach(async () => {
    const apiServiceMock = {
      Post: jest.fn().mockReturnValue(of({}))
    };

    await TestBed.configureTestingModule({
      declarations: [SearchFormComponent],
      imports: [ReactiveFormsModule],
      providers: [
        FormBuilder,
        { provide: ApiService, useValue: apiServiceMock }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchFormComponent);
    component = fixture.componentInstance;
    apiService = TestBed.inject(ApiService);

    fixture.detectChanges();
  });

  it('should call ApiService Post method with form data when basicSearch is called', () => {
    // Arrange: set up the form values
    component.searchForm.setValue({
      formName: 'testName',
      formNumber: '123'
    });

    // Act: trigger the basicSearch method
    component.basicSearch();

    // Assert: check if the Post method was called with the correct parameters
    expect(apiService.Post).toHaveBeenCalledWith('form/search', {
      formName: 'testName',
      formNumber: '123'
    });
  });
});