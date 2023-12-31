import { v4 as uuidv4 } from 'uuid';
import { Pencil2Icon, TrashIcon } from '@radix-ui/react-icons';
import { Alert, Button } from '@/components/ui';
import { formatCurrency } from '@/helpers';
import { IRealTxPlan, ITxEvolution } from '@/interfaces';

interface ITretmentEvolItemProps {
  item: ITxEvolution;
  index: number;
  treatmentsEvols: ITxEvolution[];
  setTreatmentEvol: React.Dispatch<React.SetStateAction<ITxEvolution>>;
  setTreatmentsEvols: React.Dispatch<React.SetStateAction<ITxEvolution[]>>;
  setOpenEvol: React.Dispatch<React.SetStateAction<boolean>>;
}

export const TreatmentEvolItem = ({
  item,
  index,
  setOpenEvol,
  treatmentsEvols,
  setTreatmentEvol,
  setTreatmentsEvols,
}: ITretmentEvolItemProps) => {
  const initialEvolTreatment: ITxEvolution = {
    txEvolId: uuidv4(),
    txEvolDate: new Date(),
    txEvolDesc: '',
    txEvolDoc: '',
    txEvolPayment: '',
  };

  const editTreatmentEvol = () => {
    setTreatmentEvol(item);
    setOpenEvol(true);
  };

  const deleteTreatmentEvol = () => {
    setTreatmentsEvols(treatmentsEvols.filter((t) => t.txEvolId !== item.txEvolId));
    setTreatmentEvol(initialEvolTreatment);
  };

  return (
    <Alert className="flex flex-col">
      <div className="flex justify-between items-center mb-2">
        <h1 className="text-sm font-semibold mb-1">{`Evolution #${index + 1}`}</h1>
        <p className="text-sm font-medium text-muted-foreground">
          {item.txEvolDate.toString().split(' ').slice(1, 4).join(' ')}
        </p>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex flex-col items-start justify-center gap-2">
          <h1 className="text-xl font-semibold">{item.txEvolDesc}</h1>
          <p className="text-xl">{formatCurrency(Number(item.txEvolPayment))}</p>
        </div>

        <div className="flex items-center justify-start gap-2">
          <Button type="button" size="icon" onClick={editTreatmentEvol}>
            <Pencil2Icon className="h-4 w-4" />
          </Button>
          <Button
            type="button"
            size="icon"
            variant="destructive"
            onClick={deleteTreatmentEvol}
          >
            <TrashIcon className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </Alert>
  );
};
