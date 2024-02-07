import { Alert, AlertDescription, AlertTitle, Skeleton } from '@/components/ui';
import { InfoCircledIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

interface IPatientAlertProps {
  allergies?: Array<{ name: string }>;
  extraInformation: boolean;
}

export const PatientAlert = ({ allergies = [], extraInformation }: IPatientAlertProps) => {
  const alertTitle = extraInformation && allergies.length > 0 ? 'Alerta!' : 'Información';
  const alertVariant =
    extraInformation && allergies.length > 0
      ? 'warning_filled'
      : extraInformation && allergies.length === 0
      ? 'success_filled'
      : 'default';

  const renderAlertInformation = () => {
    if (extraInformation && allergies.length > 0) {
      return allergies.map((allergy, index) => (
        <span key={allergy.name}>
          {allergy.name}
          {index !== allergies.length - 1 ? ', ' : ''}
        </span>
      ));
    }

    if (extraInformation && !allergies.length) {
      return 'El paciente no tiene ninguna restricción.';
    }

    if (!extraInformation) {
      return (
        <>
          Este paciente no tiene información adicional.{' '}
          <Link
            href=""
            // href={`/dashboard/${workspaceID}/patient/new`}
            className="font-bold hover:text-primary/80"
          >
            Agregar información adicional aquí.
          </Link>
        </>
      );
    }
  };

  return (
    <Alert variant={alertVariant}>
      <InfoCircledIcon className="h-5 w-5" />
      <AlertTitle className="text-sm font-bold dark:font-medium">{alertTitle}</AlertTitle>
      <AlertDescription className="text-sm font-medium dark:font-normal">
        {renderAlertInformation()}
      </AlertDescription>
    </Alert>
  );
};

PatientAlert.Skeleton = function PatientAlertSkeleton() {
  return <Skeleton className="h-[70px]" />;
};