let profileId = '';
describe('Пользователь заходит на страницу пользователя', () => {
    beforeEach(() => {
        cy.visit('');
        cy.login().then((data) => {
            profileId = data.id;
            cy.visit(`profile/${data.id}`);
        });
    });
    afterEach(() => {
        cy.resetProfile(profileId);
    });
    it('Профиль загружается успешно', () => {
        cy.getByTestId('ProfileCard.firstname').should('have.value', 'test');
    });
    it('редактирует его', () => {
        const newName = 'new';
        cy.updateProfile(newName);
        cy.getByTestId('ProfileCard.firstname').should('have.value', newName);
    });
});
