export const deleteModalConfig = {
  'title': 'Confirm record delete',
  'message': 'Are you sure you want to permanently delete this record? To delete it, click on DELETE otherwise click on Cancel to keep this record and carry on working with it.',
  'icon': {
    'show': true,
    'name': 'heroicons_outline:exclamation',
    'color': 'warn'
  },
  'actions': {
    'confirm': {
      'show': true,
      'label': 'DELETE',
      'color': 'warn'
    },
    'cancel': {
      'show': true,
      'label': 'Cancel'
    }
  },
  'dismissible': true
};

export const validationModalConfig = {
  'title': 'Data has errors - please correct the following',
  'message': '',
  'icon': {
    'show': true,
    'name': 'heroicons_outline:exclamation',
    'color': 'warn'
  },
  'actions': {
    'cancel': {
      'show': true,
      'label': 'Close',
      'color': 'warn'
    }
  },
  'dismissible': true
};
