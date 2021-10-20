import * as R from 'ramda';

const data = [
    { id: 1, topic: "A", learn_id: 1, desc: "A description of a thing" },
    { id: 1, topic: "A", learn_id: 1, desc: "Another thing" },
    { id: 1, topic: "A", learn_id: 1, desc: "Yet another thing to remember" },
    { id: 2, topic: "B", learn_id: 2, desc: "Do this B" },
    { id: 3, topic: "C", learn_id: 3, desc: "Buy a boat" },
];

const props = R.props(["id", "topic"]);
console.table(props(data[0]));

const topicHeaders = R.pipe(
    R.project(["id", "topic"]),
    R.uniq
);
console.table(topicHeaders(data))

const groupByTopic = R.groupBy(R.prop("topic"));

const buildDetail = (detail) => {
    return {
        learn_id: detail.learn_id,
        desc: detail.desc
    };
};

const a = R.pipe(
    groupByTopic,
    R.map(group => {
        let note = {
            id: group[0].id,
            topic: group[0].topic
        }

        note.items = R.map(buildDetail)(group);

        return note;
    }),
    R.values
)(data);

console.log(a);


// Another way

const topics = [
    { id: 1, topic: "A" },
    { id: 2, topic: "B" },
    { id: 3, topic: "C" },
];

const details = [
    { learn_id: 1, desc: "A description of a thing" },
    { learn_id: 1, desc: "Another thing" },
    { learn_id: 1, desc: "Yet another thing to remember" },
    { learn_id: 2, desc: "Do this B" },
    { learn_id: 3, desc: "Buy a boat" },
];

const buildNotes = (topics, details) => 
    R.map(topic => {
        topic.items = R.pipe(
            R.filter(R.where({ learn_id: R.equals(topic.id) })),
            R.map(buildDetail)
        )(details);
        return topic;
    })(topics);

const result = buildNotes(topics, details);

console.table(result);