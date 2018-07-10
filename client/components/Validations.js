import isEmpty from 'lodash/isEmpty';

/**
* Validate admin input for add/modify center
*
* @method
* @param {object} data - Objects to be validated
* @return {object} error - The error object
* @return {boolean} isValid - Boolean
* @memberof validateCenterInput
*/
export function validateCenterInput(data) {
  const error = {};
  if (isEmpty(data.center.centerCapacity)) {
    error.message = 'Center capacity is required';
  }
  if (isEmpty(data.center.centerFacilities)) {
    error.message = 'Center facilities is required';
  }
  if (isEmpty(data.center.centerPrice)) {
    error.message = 'Center price is required';
  }
  if (isEmpty(data.center.centerLocation)) {
    error.message = 'Center location is required';
  }
  if (isEmpty(data.center.centerDescription)) {
    error.message = 'Center description is required';
  }
  if (isEmpty(data.center.centerName)) {
    error.message = 'Center name is required';
  }
  if (isEmpty(data.image)) {
    error.message = 'Center image is required';
  }
  return {
    error,
    isValid: isEmpty(error)
  };
}

/**
* Validate user input for add/modify evebt
*
* @method
* @param {object} data - Objects to be validated
* @return {object} error - The error object
* @return {boolean} isValid - Boolean
* @memberof validateEventInput
*/
export function validateEventInput(data) {
  const error = {};
  if (isEmpty(data.event.time)) {
    error.message = 'Choose a time for your event';
  }
  if (isEmpty(data.event.endDate)) {
    error.message = 'Choose a end date for your event';
  }
  if (isEmpty(data.event.startDate)) {
    error.message = 'Choose a start date for your event';
  }
  if (isEmpty(data.event.centerId)) {
    error.message = 'Choose a center for your event';
  }
  if (isEmpty(data.event.name)) {
    error.message = 'Event name is required';
  }
  return {
    error,
    isValid: isEmpty(error)
  };
}

/**
* Validate admin input for add/modify center
*
* @method
* @param {object} data - Objects to be validated
* @return {object} error - The error object
* @return {boolean} isValid - Boolean
* @memberof validateModifyCenterInput
*/
export function validateModifyCenterInput(data) {
  const error = {};
  if (data.center.capacity === '') {
    error.message = 'Center capacity is required';
  }
  if (isEmpty(data.center.facilities)) {
    error.message = 'Center facilities is required';
  }
  if (isEmpty(data.center.price)) {
    error.message = 'Center price is required';
  }
  if (isEmpty(data.center.location)) {
    error.message = 'Center location is required';
  }
  if (isEmpty(data.center.description)) {
    error.message = 'Center description is required';
  }
  if (isEmpty(data.center.name)) {
    error.message = 'Center name is required';
  }
  if (isEmpty(data.center.image)) {
    error.message = 'Center image is required';
  }
  return {
    error,
    isValid: isEmpty(error)
  };
}
