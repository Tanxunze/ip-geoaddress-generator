import { Flex, TextField, Button } from '@radix-ui/themes';
import { MagnifyingGlassIcon, ReloadIcon } from '@radix-ui/react-icons';

export function AddressInput({ ipInput, setIpInput, generateAddress, loading }) {
    return (
        <Flex gap="3" width="100%" height="40px" align="center">
            <TextField.Root
                size="3"
                placeholder="输入IP地址（可选）"
                value={ipInput}
                onChange={(e) => setIpInput(e.target.value)}
                style={{ flex: 1 }}
            >
                <TextField.Slot>
                    <MagnifyingGlassIcon height="16" width="16" />
                </TextField.Slot>
            </TextField.Root>
            <Button
                size="3"
                onClick={() => generateAddress(ipInput)}
                disabled={loading}
            >
                <ReloadIcon />
                {loading ? '生成中...' : '生成地址'}
            </Button>
        </Flex>
    );
}