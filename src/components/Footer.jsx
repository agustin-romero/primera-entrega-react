import Cotainer from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';

export default function Footer() {
    return <footer>
        <Box style={{bgcolor:"secondary", color:"yelllow"}}>
            <Container maxWidht='lg'>
                <Grid container spacing={5}>
                    <Grid item xs={12} sm={4}>
                        <Box borderBottom={1}>Ayuda</Box>
                        <Box>
                            <Link href="/" color='inherit'>
                                Contacto
                            </Link>
                        </Box>
                        <Box>
                            <Link href="/" color='inherit'>
                                Ayuda
                            </Link>
                        </Box>
                        <Box>
                            <Link href="/" color='inherit'>
                                Privacidad
                            </Link>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Box borderBottom={1}>Ayuda</Box>
                        <Box>
                            <Link href="/" color='inherit'>
                                Registro
                            </Link>
                        </Box>
                        <Box>
                            <Link href="/" color='inherit'>
                                Iniciar Sesion
                            </Link>
                        </Box>
                        <Box>
                            <Link href="/" color='inherit'>
                                Carrito
                            </Link>
                        </Box>
                    </Grid>
                </Grid>
                <Box textAlign="center" pt={{xs: 5, sm: 0,}} pb={{xs: 5, sm: 0}}>
                    Ecommerce creado por Agustin Romero &reg; {2021}
                </Box>
            </Container>
        </Box>
    </footer>
}

