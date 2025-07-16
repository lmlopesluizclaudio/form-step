type stepsProps = {
  steps: { nome: string; ordem: number }[];
};

function Steps(props: stepsProps) {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        gap: 40,
        justifyContent: "space-between",
      }}
    >
      {props.steps.map((steps) => {
        return (
          <div
            style={{
              display: "flex",
              gap: 12,
            }}
          >
            <p> {steps.ordem} </p>
            <p> {steps.nome} </p>

            
          </div>
        );
      })}
    </div>
  );
}
export default Steps;
