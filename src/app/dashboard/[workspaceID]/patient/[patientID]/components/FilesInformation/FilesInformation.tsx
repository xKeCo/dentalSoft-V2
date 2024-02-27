import { Skeleton } from '@/components/ui';
import { FileCard, type IFileProps } from './FileCard';
import { FileUploadModal } from './FileUploadModal';

interface IFilesInformationProps {
  files: IFileProps[];
  params: {
    workspaceID: string;
    patientID: string;
  };
}

export const FilesInformation = ({ files, params }: IFilesInformationProps) => {
  return (
    <div className="flex flex-col items-start justify-start col-span-4 md:col-span-3 lg:col-span-3 border rounded-2xl gap-3 w-full p-6 min-h-[274px] overflow-hidden dark:bg-zinc-900">
      <div className="flex items-center justify-between w-full mb-2">
        <h1 className="text-xl font-semibold">Archivos / Documentos</h1>
        <FileUploadModal params={params} />
      </div>
      {files.length === 0 ? (
        <div className="flex items-center justify-center h-full w-full">
          <h1 className="text-lg text-center text-balance">Aún no hay archivos o documentos.</h1>
        </div>
      ) : (
        <div className="flex flex-col justify-start items-start gap-2 w-full ">
          {files.map((file) => (
            <FileCard file={file} key={file.name} />
          ))}
        </div>
      )}
    </div>
  );
};

FilesInformation.Skeleton = function FilesInformationSkeleton() {
  return (
    <div className="flex flex-col items-start justify-start col-span-4 md:col-span-3 lg:col-span-3 border rounded-2xl gap-3 w-full p-6 min-h-[274px] overflow-hidden dark:bg-zinc-900">
      <Skeleton className="h-7 w-full" />

      <div className="flex flex-col justify-start items-start gap-2 w-full">
        <FileCard.Skeleton />
        <FileCard.Skeleton />
        <FileCard.Skeleton />
      </div>
    </div>
  );
};
