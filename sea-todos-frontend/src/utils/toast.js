import toastr from 'toastr';

export const showErrorMessage = (title, message) => {
  toastr.remove();
  toastr.options = {
    positionClass: 'toast-bottom-left',
    progressBar: true,
    closeButton: true,
  };
  toastr.error(message, title);
};

export const showSuccessMessage = (title, message) => {
  toastr.remove();
  toastr.options = {
    positionClass: 'toast-bottom-left',
    progressBar: true,
    closeButton: true,
  };
  toastr.success(message, title);
};
