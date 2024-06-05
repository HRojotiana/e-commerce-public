import { Box, Flex, Stack } from '@chakra-ui/react';
import Brand from './Brand'
import Links from './Links';
import { IRoute } from '../../types/navigation';


interface SidebarContentProps {
	routes: IRoute[];
}

function SidebarContent(props: SidebarContentProps) {
	const { routes } = props;
	return (
		<Flex direction='column' height='100%' pt='25px' borderRadius='30px'>
			<Brand />
			<Stack direction='column' mt='8px' mb='auto'>
				<Box ps='20px' pe={{ lg: '16px', '2xl': '16px' }}>
					<Links routes={routes} />
				</Box>
			</Stack>

		</Flex>
	);
}

export default SidebarContent;
