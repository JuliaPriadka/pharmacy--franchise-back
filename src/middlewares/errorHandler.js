import { HttpError } from 'http-errors';

export const errorHandler = (error, req, res, next) => {
  console.log(error, 'HttpError');
  if (error instanceof HttpError) {
    res
      .status(error.status)
      .send({ status: error.status, message: error.message });
    return;
  }

  res.status(500).send({
    status: 500,
    message: 'Something went wrong',
    error: error.message,
  });
};
