/**
 * The `i18n` (internationalisation) object contains strings which are displayed on the UI.
 */
export const i18n = {
  english: {
    common: {
      createButton: 'Create',
      continueButton: 'Continue',
      cancelButton: 'Cancel',
      saveButton: 'Save'
    },
    unsavedChanges: {
      unsavedChanges: 'Unsaved changes',
      areYouSureYouWantToCancel: 'Are you sure you want to cancel?',
      anyUnsavedChangesWillBeLost: 'Any unsaved changes will be lost.',
      yesSure: 'Yes',
      noKeepEditing: 'No'
    },
    pages: {
      helloWorld: {
        title: 'Hello World'
      },
      resellerList: {
        title: 'Resellers List',
        newResellerButton: 'New Reseller',
        columnNames: {
          resellerName: 'Reseller name',
          emailAddress: 'Email address',
          salesforceAccount: 'Salesforce account',
          region: 'Region'
        },
      },
      newReseller: {
        title: 'New reseller',
        form: {
          resellerName: 'Reseller name',
          emailAddress: 'Contact email',
          salesforceAccount: 'Salesforce account',
          resellerRegion: 'Region'
        },
        resellerRegionValue: 'EMEA'
      },
      resellerView: {
        title: 'Reseller view',
        newCustomerButton: 'New customer',
        details: {
          name: 'Name',
          contactEmail: 'Contact email',
          region: 'Region',
          salesforceAccount: 'Salesforce account'
        },
        tenantsGrid: {
          columnNames: {
            tenantName: 'Tenant name',
            contractCode: 'Contract code',
            minimumTransformVersion: 'Minimum transform version'
          }
        }
      },
      createCustomer: {
        title: 'New customer',
        discardCustomerButton: 'Discard customer',
        stepper: {
          firstStep: 'New details & Transform version',
          secondStep: 'Package configuration'
        },
        formInputs: {
          customerName: 'Customer name',
          contactEmail: 'Contact email',
          transformVersion: 'Select transform version',
          selectPackage: 'Select package'
        }
      },
      tenantSettings: {
        title: 'Tenant settings',
        tenantUpdated: (tenantName) => `'${tenantName}' has been updated`,
        contractCode: 'Contract code',
        minimumTransformVersion: 'Minimum transform version',
        reseller: 'Reseller',
      },
      notFound: {
        title: 'Not found'
      },
    }
  },
  navigation: {
    title: 'Transform'
  },
};

/**
 * `navigation` separates out the navigation-specific parts to greatly reduce the compiled
 * navigation size.
 */
export const { navigation } = i18n.english;
