import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page/Page';
import { VStack } from '@/shared/ui/Stack';
import { EditableProfileCard } from '@/features/editableProfileCard';
import { ProfileRating } from '@/features/profileRating';
import { getUserAuthData } from '@/entities/User';

interface ProfilePageProps {
    className?: string;
    profileId: string
}

const ProfilePage = ({ className, profileId }: ProfilePageProps) => {
    const { id } = useParams<{ id: string}>();

    return (
        <Page className={classNames('', {}, [className])}>
            <VStack gap="16" max>
                <EditableProfileCard id={id} />
                <ProfileRating profileId={profileId} />
            </VStack>
        </Page>
    );
};

export default ProfilePage;
