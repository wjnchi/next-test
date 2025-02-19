import pre from "@douyinfe/semi-ui/lib/es/markdownRender/components/code";

const Mission3: React.FC = () => {
  const sug = {
    extra: {
      roughsort_score: 1,
      predict_ctr_score: 2,
      predict_utility_score: 3,
      ranking_rule_score: 4,
      words_type: 5,
      predict_order: 6,
      roughsort_order: 7,
    },
  };

  const debugInfo = `
   roughsort_score: ${sug.extra.roughsort_score},
   predict_ctr_score:${sug.extra.predict_ctr_score} ,
   predict_utility_score: ${sug.extra.predict_utility_score},
   ranking_rule_score:${sug.extra.ranking_rule_score} ,
   words_type:${sug.extra.words_type} ,
   predict_order:${sug.extra.predict_order} ,
   roughsort_order:${sug.extra.roughsort_order}`;

  return <pre>{debugInfo}</pre>;
};

export default Mission3;
