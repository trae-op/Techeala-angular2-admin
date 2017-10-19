

export class MainData {

  badRequest: '===> Bad request <===\n';

  serverError: 'Server error';

  cacheMessage(prop) {
    return 'if exist data => ' + prop;
  }

  api() {
    return {
      mainMenu: {
        get: 'api/get/mainMenu'
      },
      home: {
        get: 'api/get/home'
      },
      about: {
        get: 'api/get/about',
        teamGallery: {
          edit: 'api/edit/teamPhoto',
          add: 'api/add/teamPhoto',
          delete: 'api/delete/teamPhoto'
        },
        description: {
          edit: 'api/edit/aboutDescription'
        }
      },
      portfolio: {
        projects: {
          get: 'api/get/projects'
        }
      },
      technologies: {
        get: 'api/get/technologies'
      },
      vacancies: {
        get: 'api/get/vacancies'
      },
      faq: {
        get: 'api/get/faq'
      },
      contacts: {
        get: 'api/get/contacts'
      }
    };
  };

};