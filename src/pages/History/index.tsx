import { TrashIcon } from "lucide-react";
import { ButtonDefault } from "../../components/Button/ButtonDefault";
import { Container } from "../../components/Container";
import { Heading } from "../../components/Heading";
import { MainTemplate } from "../../template/MainTemplate";

import styles from './styles.module.css'

export function History() {

  return (
    <MainTemplate>
      <Container>
        <Heading>
          <span>History</span>

          <span className={styles.buttonContainer}>
            <ButtonDefault
              icon={<TrashIcon />}
              color='red'
              aria-label='Apagar todo o histórico'
              title='Apagar histórico'

            />
          </span>

        </Heading>
      </Container>

      <Container>

        <div className={styles.responsiveTable}>
          <table>
            <thead>
              <tr>
                <th
                >
                  Tarefa ↕
                </th>
                <th
                >
                  Duração ↕
                </th>
                <th
                >
                  Data ↕
                </th>
                <th>Status</th>
                <th>Tipo</th>
              </tr>
            </thead>

            <tbody>

            </tbody>
          </table>
        </div>

      </Container>
    </MainTemplate>
  );
}