import Container from "./components/container/Container";
import Skeleton from "./components/skeleton/Skeleton";
import Title from "./components/Typography/Title";
import Text from "./components/Typography/Text";
import { useEffect, useState } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() =>{
      console.log("Bateu")
      setIsLoading(!isLoading)
    }, 2000)
  }, [isLoading])

  return (
    <Container size="lg" className="py-10">
      <Title className="mb-6">Meus Projetos</Title>

      {isLoading ? (
        <div className="space-y-4">
          <Skeleton height={20} width="60%" variant="text" />
          <Skeleton height={150} variant="rectangular" />
          <div className="flex gap-4">
            <Skeleton height={40} width={100} />
            <Skeleton height={40} width={100} />
          </div>
        </div>
      ) : (
        <>
                <Text>Conteúdo carregado!</Text>
        </>
      )}
    </Container>
  );
}

export default App;
