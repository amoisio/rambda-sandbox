export default interface INote {
    username: string;
    title: string;
    dueDate: string;
    complete: boolean;
    effort: string;
    priority: string;
};

export const data: INote[] = [
    {
        username: 'Anita',
        title: 'Setup the project',
        dueDate: '2021-10-01',
        complete: true,
        effort: 'low',
        priority: 'medium'
    },
    {
        username: 'Anita',
        title: 'Purchase Equipment`',
        dueDate: '2021-10-07',
        complete: true,
        effort: 'low',
        priority: 'medium'
    }, {
        username: 'Anita',
        title: 'Welcome the team',
        dueDate: '2021-11-01',
        complete: false,
        effort: 'low',
        priority: 'medium'
    }, {
        username: 'Scott',
        title: 'Write module A',
        dueDate: '2021-10-02',
        complete: true,
        effort: 'low',
        priority: 'medium'
    }, {
        username: 'Scott',
        title: 'Write module B',
        dueDate: '2021-10-09',
        complete: false,
        effort: 'low',
        priority: 'medium'
    }, {
        username: 'Scott',
        title: 'Write module C',
        dueDate: '2021-10-16',
        complete: false,
        effort: 'low',
        priority: 'medium'
    }, {
        username: 'Michael',
        title: 'Finish algebraic types',
        dueDate: '2021-10-20',
        complete: false,
        effort: 'high',
        priority: 'high'
    }
];