export const updateProfile = (firstname: string) => {
    cy.getByTestId('EditableProfileCardHeader.EditButton').click();
    cy.getByTestId('ProfileCard.firstname').clear().type(firstname);
    cy.getByTestId('EditableProfileCardHeader.SaveButton').click();
};

export const resetProfile = (profileId: string) => {
    return cy.request({
        method: 'PUT',
        url: `http://localhost:8000/profile/${profileId}`,
        headers: { Authorization: '123' },
        body: {
            id: '4',
            first: 'test',
            lastname: 'user',
            age: 45,
            currency: 'USD',
            country: 'Italy',
            city: 'Neapol',
            username: 'testuser',
            avatar:
                // eslint-disable-next-line max-len
                'https://images.pexels.com/photos/247502/pexels-photo-247502.jpeg?cs=srgb&dl=pexels-pixabay-247502.jpg&fm=jpg',
        },
    });
};

declare global {
    namespace Cypress {
        interface Chainable {
            updateProfile(firstname: string): Chainable<void>;
            resetProfile(profileId: string): Chainable<void>;
        }
    }
}
