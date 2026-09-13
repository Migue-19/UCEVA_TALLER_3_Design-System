const baseConfig = requier('../../jest.config.js');

module.exports = {
    ...baseConfig,
    globals: {
        'ts-jest': {
            tsconfig: '../../projects/design-system-bootstrap/tsconfig.spec.json'
        }
    },
    displayName: 'design-system-bootstrap',
    name: 'design-system-bootstrap',
    rootDir: 'design-system-bootstrap',
}