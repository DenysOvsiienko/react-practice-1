import {
  Section,
  Container,
  BlogCard,
  Heading,
  Statistics,
  CryptoHistory,
  ForbesList,
} from 'components';

import articleData from './data/article.json';
import statsData from './data/stats.json';
import forbesData from './data/forbes.json';
import transactionsData from './data/transactions.json';

export const App = () => {
  return (
    <Section>
      <Container>
        <Heading title="Task 1 Blog Card" bottom />
        <BlogCard
          poster={articleData.poster}
          tag={articleData.tag}
          title={articleData.title}
          description={articleData.description}
          name={articleData.name}
          avatar={articleData.avatar}
          postedAt={articleData.postedAt}
        />

        <Heading title="Task 2 Statistics" top bottom />
        <Statistics title="Main Statistics" stats={statsData} />

        <Heading title="Task 3 Forbes list" top bottom />
        <ForbesList forbesData={forbesData} />

        <Heading title="Task 4 Crypto history" top bottom />
        <CryptoHistory items={transactionsData} />
      </Container>
    </Section>
  );
};
