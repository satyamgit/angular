


import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { ApiService } from './api.service';

describe('ApiService', () => {
  let service: ApiService;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ApiService,
        {
          provide: HttpClient,
          useValue: {
            post: jest.fn(), // Mock the HttpClient's post method
          },
        },
      ],
    });

    service = TestBed.inject(ApiService);
    httpClient = TestBed.inject(HttpClient);
  });

  it('should call HttpClient.post with correct URL and data', () => {
    const endpoint = 'submit-data';
    const data = { name: 'John Doe', age: 30, email: 'john.doe@example.com' };
    const mockResponse = { success: true };

    // Spy on the HttpClient's post method
    const postSpy = jest.spyOn(httpClient, 'post').mockReturnValue(of(mockResponse));

    // Call the postData method
    service.postData(endpoint, data).subscribe((response) => {
      // Verify the response
      expect(response).toEqual(mockResponse);
    });

    // Assertions
    const url = `${service['apiUrl']}/${endpoint}`; // Combine base API URL with endpoint
    expect(postSpy).toHaveBeenCalledWith(url, data, expect.any(Object)); // Verify URL, data, and headers
    expect(postSpy).toHaveBeenCalledTimes(1); // Ensure post method was called once
  });
});





# Application

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
